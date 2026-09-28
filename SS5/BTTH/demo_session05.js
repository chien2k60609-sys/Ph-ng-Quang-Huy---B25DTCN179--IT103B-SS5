const rawPatientCode = " med-rhm-0815-bhyt ";
const BASE_EXAMINATION_FEE = 150000;

const cleanCode = rawPatientCode.trim().toUpperCase();

const isValidCode = cleanCode.startsWith("MED-");

if (isValidCode) {
  const deptCode = cleanCode.slice(4, 7);

  let departmentName = "";
  switch (deptCode) {
    case "RHM":
      departmentName = "Răng Hàm Mặt";
      break;
    case "TAI":
      departmentName = "Tai Mũi Họng";
      break;
    case "MAT":
      departmentName = "Mắt";
      break;
    default:
      departmentName = "Chuyên Khoa Khác";
  }

  const isInsurance = cleanCode.includes("BHYT");
  const queueNumber = cleanCode.slice(8, 12);
  const discountRate = isInsurance ? 0.8 : 0;
  const finalFee = BASE_EXAMINATION_FEE * (1 - discountRate);

  const divider = "=".repeat(35);

  console.log(divider);
  console.log(divider);
  console.log(`Mã phiếu chuẩn hóa : ${cleanCode}`);
  console.log(`Chuyên khoa khám   : ${departmentName} (${deptCode})`);
  console.log(`Số thứ tự tiếp đón : ${queueNumber}`);
  console.log(`Dịch vụ BHYT       : ${isInsurance ? "Có áp dụng (Giảm 80%)" : "Không"}`);
  console.log(`Chi phí khám bệnh  : ${finalFee.toLocaleString()} VNĐ`);
  console.log(divider);
} else {
  console.error(" Mã phiếu khám bệnh không hợp lệ");
}
