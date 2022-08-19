// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.

// For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//Examples
// DNAtoRNA("TTTT"), "UUUU")
// DNAtoRNA("GCAT"), "GCAU")
// DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC

function DNAtoRNA(dna) {
    let DNA=dna.split('')
    let arr=[]
  for(let i=0;i<=DNA.length-1;i++){
    if(DNA[i]=='T'){
      arr.push('U')
  }else arr.push(DNA[i])
  }
    return arr.join('')
  }