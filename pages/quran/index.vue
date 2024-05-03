<script lang="ts" setup>
import { useApiFetch } from "~/composables/useApiFetch"
import type { ISurat } from "~/types/ISurat"


definePageMeta({
  alias: '/category/al-quran'
})

useSeoMeta({
  title: 'Al - Qur\'an'
})

const { data: quranLists } = await useApiFetch<ISurat>('/v2/surat')
</script>

<template>
  <div class="p-6">
    <!-- <section class="mb-11">
      <LatestReadCardComponent />
    </section> -->

    <!-- quran list section -->
    <section class="mb-11">
      <div class="grid grid-cols-12 gap-5">
        <div v-for="(item, index) in quranLists?.data" :key="index" class="col-span-12">
          <NuxtLink :to="`/category/al-quran/${item?.nomor}`" class="border rounded-2xl py-3.5 px-2.5 flex justify-between items-center bg-white">
            <div class="flex gap-x-4">
              <div class="bg-[#076C58] py-3 px-5 rounded-lg text-white">
                {{ item?.nomor }}
              </div>
              <div>
                <h3 class="text-[#111827] font-semibold text-base">{{ item?.namaLatin }}</h3>
                <div class="text-xs text-[#374151] flex items-center gap-x-2">
                  <span>{{ item?.arti }}</span>
                  <div class="">
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#374151" />
                    </svg>
                  </div>
                  <span>{{ item?.jumlahAyat }} Ayat</span>
                </div>
              </div>
            </div>
            <p class="font-amiri font-bold text-3xl text-[#076C58]">
              {{ item?.nama }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
