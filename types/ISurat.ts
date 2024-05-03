export interface Datum {
  nomor: number
  nama: string
  namaLatin: string
  jumlahAyat: number
  tempatTurun: string
  arti: string
  deskripsi: string
  audioFull: { [key: string]: string }
}

export interface ISurat {
  code: number
  message: string
  data: Datum[]
}