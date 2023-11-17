//SECTION: Typography
/** 
H1 - Main heading
Weight 600
Size 20px
Line height: 24px
*/
const mainHeading = `text-xl font-semibold leading-tight text-kyc-primary-dark`

/**
  Page heading
  Weight 700
  Size 16px
  Line height 22px
  color: #0D0C0C
 */
const pageHeading = `text-base font-bold leading-tight text-kyc-primary-dark`


/**
 * subHeading
 */
const subHeading = `text-base font-medium leading-snug text-kyc-primary-dark`


/**
 * contentHeading
 * Weight: 600
 * Size: 14px
 * Line-height: 20px
 * color: #9A9898
 */
const contentHeading = `text-sm font-semibold leading-tigh text-kyc-secondary-grey`


/**
 * baseText
 * Weight 500
 * Size 14px
 * Line height 20px
 * color: #9A9898
 */
const baseText = `text-sm text-kyc-secondary-grey font-normal leading-snug`


//styleName: Paragraph/Medium/Medium;
// font - family: Inter;
// font - size: 16px;
// font - weight: 500;
// line - height: 22px;
// letter - spacing: 0em;
// text - align: left;
//color: #403F3F
const navMenuHeading = `text-base font-medium leading-snug text-kyc-secondary-dark`


const navMenuDesctiption = `text-small font-medium leading-4 text-kyc-secondary-grey`

/**
 * 
Weight: 500
Size: 12px
Line height: 16px
color: #9A9898
 */ 
const baseDescription = `text-xs font-medium leading-snug text-kyc-secondary-grey`


// font - family: Inter;
// font - size: 16px;
// font - weight: 500;
// line - height: 22px;
// letter - spacing: 0em;
// text - align: left;
//color: #403F3F
const tableCaption = `text-base font-medium leading-snug text-kyc-secondary-dark`

// Name: Paragraph / Small / Bold
// Weight: 700
// Size: 14px
// Line height: 20px
//color: #403F3F
const tableValue = `text-sm font-bold leading-snug text-kyc-secondary-dark`

//SECTION UI Elements
/**
 * font-size: 14px
 * font-weight: 500
 * color: #9A9898
 */
const baseLabel = `text-sm font-medium text-kyc-secondary-grey`

const baseInput = `pl-0 placeholder-neutral-300 !text-base border-transparent focus:border-transparent border-b-kyc-border-dark focus:border-b-kyc-border-dark`

const nativeSelect = `bg-transparent leading-snug font-normal mt-2 mb-2.5 outline-none`

//SECTION: BUTTONS

const actionBtnAccent = `!rounded-3xl !bg-kyc-primary border-kyc-primary-dark !font-medium self-end max-h-11 mb-6`
const actionBtnDisabled = `!rounded-3xl !font-medium self-end max-h-11 mb-6`

//Modals

const modalBottomOverlay = `h-screen w-screen bg-[rgba(64,63,63,.54)] fixed top-0 left-0`



//SECTION: 3th part && WEB KYC
/**
 * Main heading
font-family: Inter;
font-size: 20px;
font-weight: 500;
line-height: 32px;
*/
const webMainHeading = `text-xl font-medium leading-snug text-black`

/**
 * Main heading
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 32px;
*/
const webMainHeadingMobile = `text-base font-medium leading-snug text-black`


/** 
 * Base text
  LINK: :42 
  */
const webBasetext = `${baseText}`

// 
// size: 16px;
// font-weight: 500;
// line-height: 22px;
// 'Create an account'
// 
const webSubHeading = `text-base font-medium leading-snug text-kyc-primary-dark`


/** Nav item
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
 */
const webNavItem = `text-sm font-medium leading-snug text-black inline-block`

//3rd part
const actionItemDefault = `border border-kyc-secondary-grey rounded-3xl flex items-center opacity-70`
const actionItemBordered = `border border-kyc-primary-dark rounded-3xl flex items-center`

//NOTE: EXPORTS
const BaseStyles = {
  mainHeading,
  pageHeading,
  subHeading,
  contentHeading,
  baseText,
  navMenuHeading,
  navMenuDesctiption,
  baseDescription,
  actionBtnAccent,
  baseLabel,
  baseInput,
  tableCaption,
  tableValue,
  modalBottomOverlay,
  actionBtnDisabled,
  nativeSelect,

  webMainHeading,
  webBasetext,
  webSubHeading,
  webNavItem,
  webMainHeadingMobile,

  actionItemBordered,
  actionItemDefault
}

export default BaseStyles