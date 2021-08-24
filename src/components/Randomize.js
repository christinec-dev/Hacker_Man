//array of hidden codes
var hidden_codes = [
	"phishing",
	"pharming",
	"ransomware",
	"spoofing",
	"adware",
	"zerodaythreat",
	"brute",
	"kioptrix", 
	"payload",
	"rootkit",
	"cloaking",
	"metasploit",
	"javascript",
	"java",
	"react",
	"mongodb"
]

//this will randomize our codes to display at random
function randomWord() {
  return hidden_codes[Math.floor(Math.random() * hidden_codes.length)]
}

//exports for use in other files
export { randomWord }