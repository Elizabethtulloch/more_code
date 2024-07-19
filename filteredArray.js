const listfoFactors = ["sms.com","email.com","facebook.us", "creditcard.us", "pinnumber.com"]
const websiteswithUSasGTLD = listfoFactors.filter(
    (e) =>{ return e[-3] == ".us"}
)
console.log(websiteswithUSasGTLD)