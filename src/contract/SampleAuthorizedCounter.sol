pragma solidity ^0.8;

contract AuthorizedCounter {
    uint256 public authorizedUsers;

    mapping (address => bool) private _isAuthorized;

    function isAuthorized(address user) public view returns (bool) {
        return _isAuthorized[user];
    }

    /**
        Verifies provided JWT Proof for Verifiable Credential.
        Returns `address` of credential subject and string with DID URL of issuer
     */
    function authorize(bytes calldata credential) public {
        (bool success, bytes memory data) = address(1027).staticcall(credential);
        require(success, "Cannot verify credential");

        // Precompile call returns address of credential subject + did url of issuer
        (address subject,) = decodeResult(data);

        if (!_isAuthorized[subject]) {
            _isAuthorized[subject] = true;
            authorizedUsers++;
        }
    }

    /**
        Decodes precompile result. Precompile returns credential subject address and DID URL of issuer
     */
    function decodeResult(bytes memory output) public pure returns (address, string memory) {
        (address subject, string memory issuer) = abi.decode(output, (address, string));
        return (subject, issuer);
    }
}
