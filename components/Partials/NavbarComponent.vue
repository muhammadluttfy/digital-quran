<script lang="ts" setup></script>

<template>
  <div class="p-6">
    <div class="flex items-center justify-between">
      <NuxtLink to="/categories">
        <h1 class="font-bold text-xl text-[#076C58]">
          Digital Qur'an
        </h1>
      </NuxtLink>
      <UButton color="white" variant="ghost">
        <template #trailing>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 20.9999L16.65 16.6499" stroke="#888888" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </template>
      </UButton>
    </div>
  </div>
</template>

<style scoped></style>
