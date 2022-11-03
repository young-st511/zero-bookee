export default interface CompanyInfoType {
  /** 회사명 */
  companyName: string;
  /** 사업자번호 */
  businessNumber: string;
  /** 회사 주소 */
  companyAdress: string;
  /** 개인사업자 or 법인사업자 */
  ownership?: "sole" | "corporation";
  /** 대표 */
  ownerName: string;
  /** 대표 주민등록 번호 */
  ownerResisterNumber?: string;
  /** 회사 대표 번호 */
  companyCallNumber: string;
  /** 팩스 번호 */
  faxNumber?: string;
  /** 대표 이메일 */
  companyEmail: string;
  /** 법인 번호 */
  corporationNumber?: string;
  /** 업태 - 도소매업, 서비스업, 광업... */
  businessType?: string;
  /** 업종 - 의류 소매업, 한식, 소분류... */
  businessItems?: string;
}