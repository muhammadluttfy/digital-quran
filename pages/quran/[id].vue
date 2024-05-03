<script lang="ts" setup>
import { useApiFetch } from '~/composables/useApiFetch'
import type { Ayat, IDetailSurat } from '~/types/IDetailSurat'
import type { ISurat } from '~/types/ISurat'


definePageMeta({
  layout: 'empty',
  alias: '/category/al-quran/:id'
})

useSeoMeta({
  title: 'Al - Qur\'an'
})


const route = useRoute()
const router = useRouter()
const id = route.params.id as string

const { data: detailSurat, pending } = await useApiFetch<IDetailSurat>(`/surat/${id}`)
const { data: surahLists } = await useApiFetch<ISurat>('/v2/surat')

const state = reactive({
  surahId: parseInt(id)
})

const dropdownItems = (item: any) => {
  const baseItems = [
    {
      label: 'Bagikan Ayat',
      icon: 'i-heroicons-share-solid',
      class: 'gap-x-4',
      click: () => handleShareAyat(item)
    },
    {
      label: 'Lihat Tafsir',
      icon: 'i-heroicons-book-open',
      class: 'gap-x-4',
      click: () => handleShowTafsir(item)
    },
    {
      label: 'Terakhir Dibaca',
      icon: 'i-heroicons-bookmark-square',
      class: 'gap-x-4',
      click: () => handleLastRead(item)
    },
    {
      label: 'Salin Ayat',
      icon: 'i-heroicons-clipboard-document-check',
      class: 'gap-x-4',
      click: () => handleCopyAyat(item)
    }
  ]

  return [baseItems]
}

function handlePrevSurat (id: number | string | undefined) {
  router.push(`/category/al-quran/${id}`)
}

function handleNextSurat (id: number | string | undefined) {
  router.push(`/category/al-quran/${id}`)
}

function handleShareAyat(item: any) {
  console.log(item)
}

function handleShowTafsir(item: any) {
  console.log(item)
}

function handleLastRead(item: Ayat) {
  localStorage.setItem('last_read', JSON.stringify(item))
}

function handleCopyAyat(item: any) {
  console.log(item)
}

watch(() => state.surahId, (newValue: any) => {
  router.push(`/category/al-quran/${newValue}`)
})
</script>

<template>
  <div>
    <!-- back menu -->
    <div class="flex p-6 border-b">
      <UButton to="/category/al-quran" label="Kembali" icon="i-heroicons-arrow-left-20-solid" size="xl" color="gray"
        variant="ghost" />
    </div>

    <!-- navigation -->
    <div class="p-6 border-b">
      <div class="flex gap-2 justify-center mb-3.5">
        <UButton
          :label="detailSurat?.surat_sebelumnya?.nama_latin ?? '-'"
          color="gray"
          icon="i-heroicons-arrow-left-20-solid" size="xl"
          class="rounded-l-full  text-sm w-[150px]"
          :disabled="!detailSurat?.surat_sebelumnya"
          @click="handlePrevSurat(detailSurat?.surat_sebelumnya?.id)"
        />
        <UButton
          :label="detailSurat?.surat_selanjutnya?.nama_latin ?? '-'"
          color="gray"
          size="xl"
          class="rounded-r-full text-sm w-[150px]"
          :disabled="!detailSurat?.surat_selanjutnya"
          @click="handleNextSurat(detailSurat?.surat_selanjutnya?.id)"
        >
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
          </template>
        </UButton>
      </div>
      <div class="flex justify-center">
        <USelectMenu v-model="state.surahId" :options="surahLists?.data" placeholder="Pilih Surah" value-attribute="nomor"
          option-attribute="namaLatin" searchable class="w-[160px]" size="lg" />
      </div>
    </div>

    <!-- surah lists -->
    <div class="grid grid-cols-12">
      <div v-if="id !== '1' && id !== '9'" class="col-span-12 border-b">
        <div class="px-6 py-10">
          <div class="flex justify-end items-start gap-4 mb-10">
            <p class="font-amiri text-3xl font-semibold text-[#111827] text-end ayat-customize -tracking-tighter">
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
          </div>
          <p class="text-base text-[#076C58] mb-3.5">
            bismillāhir-raḥmānir-raḥīm(i).
          </p>
          <p class="text-base text-[#111827]">
            Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
          </p>
        </div>
      </div>
      <div v-for="(item, index) in detailSurat?.ayat" :key="index" class="col-span-12 border-b">
        <div class="px-6 py-10">
          <div class="flex justify-between items-start gap-4 mb-10">
            <div class="w-6">
              <UDropdown :items="dropdownItems(item)">
                <button type="button" class="text-[#6B7280]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              </UDropdown>
            </div>
            <p class="font-amiri text-3xl font-semibold text-[#111827] text-end ayat-customize -tracking-tighter">
            {{ item?.ar }}
            </p>
          </div>
          <p class="text-base text-[#076C58] mb-3.5">{{ item?.tr }}</p>
          <p class="text-base text-[#111827]">{{ item?.idn }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
