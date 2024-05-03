export interface Ayat {
  id: number
  surah: number
  nomor: number
  ar: string
  tr: string
  idn: string
}

export interface Datum {
  id: number
  nomor: number
  nama: string
  nama_latin: string
  jumlah_ayat: number
  tempat_turun: string
  arti: string
  deskripsi: string
  audio: string
}

export interface PrevNextDatum {
  arti: string
  audio: string
  deskripsi: string
  id: string
  jumlah_ayat: string
  nama: string
  nama_latin: string
  nomor: string
  ttempat_turun: string
}

export interface IDetailSurat {
  nomor: number
  nama: string
  nama_latin: string
  jumlah_ayat: number
  tempat_turun: string
  arti: string
  deskripsi: string
  audio: string
  status: boolean
  ayat: Ayat[]
  surat_sebelumnya: PrevNextDatum
  surat_selanjutnya: PrevNextDatum
}