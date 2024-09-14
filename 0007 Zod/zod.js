// Zod is an input validation library
const zod = require("zod");

function validateInput(arr){
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr)
    console.log(response);
}

function validateInputForEmail(obj) {
    const schema = zod.object({
    email: zod.string().email(),
    password: zod.string() .min(8)
})
    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput([1,2,3])
validateInput(["1",2,3])  
validateInputForEmail({
    email: "ron@gmail.cmo",
    password: "1asdasdasdadsadsads"
});
