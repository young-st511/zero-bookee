import CompanyInfoType from "./companyInfoType";

export default interface UserInfoType extends CompanyInfoType {
  /** 유저 고유 key 값 */
  userKey: string;
  /** 유저 이메일 */
  userEmail: string;
  /** 비밀번호 */
  userPassword: string;
  /** 광고 수신 동의 */
  recievingAdAgree: boolean;
  /** 직급 */
  position?: string;
  /** 개업일 */
  openingDay: Date;
  /** 개인사업자 or 법인사업자 */
  ownership: "sole" | "corporation";
  /** 관할 세무서 */
  taxOffice: string;
}
