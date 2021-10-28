import { createHash } from "https://deno.land/std@0.110.0/hash/mod.ts";

//KECCAK256
const hashFrase = createHash("keccak256");
hashFrase.update("Contratos Inteligentes: Hands on do episódio sobre hash.");
console.log("hash da frase:",hashFrase.toString());
const hashPonto = createHash("keccak256");
hashPonto.update(".");
console.log("hash do ponto:",hashPonto.toString());
const hashmd5 = createHash("md5");
hashmd5.update(" çaldkjfçlaskdjfçlaskdjfç lkajsdfçlakjdçflakjdfçlakjdfçlakdjfçlakdjçlakdjçlakdjfçlakdjçflakdjfçlakdjfçalkdjfçalkdjfçalkdjfçalkdjfçaldkjfçalkdjfaçldkjfaçldskjfaçldkfjaçldkfjaçldkfjaçlsdkfjaçldkfjaçldskfjaçldkfjaçdlkfjaçldkfjaçldkfjaçdlkfjaçdlkfjaçsdlkfjasçdlkfjasdçlfkjadçlfkajdsçlfkajsdçlfkajdsçlfkajdçlfkjds");
console.log("hash do md5  :",hashmd5.toString());
