const rawTicketCode = "   med-card-0428-ut   ";

const cleanTicketCode = rawTicketCode.trim().toUpperCase();

const isValidPrefix = cleanTicketCode.startsWith("MED-");
const departmentCode = cleanTicketCode.slice(4, 8);
const isPriority = cleanTicketCode.includes("-UT");
const displayCode = cleanTicketCode.replaceAll("-", " | ");

console.log("Mã phiếu hợp lệ:", isValidPrefix);
console.log("Khoa điều trị:", departmentCode);
console.log("Cần ưu tiên:", isPriority);
console.log("Chuỗi in phiếu:", displayCode);
