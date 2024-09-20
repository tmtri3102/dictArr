// Tạo mảng chứa 20 từ tiếng Anh
let array1 = [
	"apple",
	"banana",
	"cherry",
	"date",
	"elderberry",
	"fig",
	"grape",
	"honeydew",
	"kiwi",
	"lemon",
	"mango",
	"nectarine",
	"orange",
	"papaya",
	"quince",
	"raspberry",
	"strawberry",
	"tangerine",
	"ugli",
	"watermelon",
];

// Tạo mảng chứa 20 từ tiếng Việt tương ứng
let array2 = [
	"táo",
	"chuối",
	"anh đào",
	"chà là",
	"cơm cháy",
	"sung",
	"nho",
	"dưa lưới",
	"kiwi",
	"chanh",
	"xoài",
	"xuân đào",
	"cam",
	"đu đủ",
	"mộc qua",
	"mâm xôi",
	"dâu tây",
	"quýt",
	"cam Ugli",
	"dưa hấu",
];

function translateWord() {
	event.preventDefault();
	let inputWord = document
		.getElementById("inputWord")
		.value.trim()
		.toLowerCase();
	let index = array1.indexOf(inputWord);
	let demo = document.getElementById("result");
	if (index !== -1) {
		demo.innerHTML = array2[index];
	} else {
		alert("Not found");
	}
}
