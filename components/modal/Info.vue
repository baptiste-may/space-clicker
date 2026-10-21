<script lang="ts" setup>
const { isInfoModalOpen } = useGame();
</script>

<template>
  <!-- The design owns its visible title and close button; the Nuxt UI header is kept for a11y only. -->
  <UModal
    v-model:open="isInfoModalOpen"
    title="Settings"
    :close="false"
    :ui="{
      overlay:
        'z-40 bg-transparent backdrop-blur-sm data-[state=open]:animate-[fade-in_500ms_ease] data-[state=closed]:animate-[fade-out_500ms_ease]',
      content:
        'z-40 w-auto max-w-[100vw] max-h-[100dvh] sm:max-h-[100dvh] overflow-y-auto rounded-none bg-transparent text-black shadow-none ring-0 divide-y-0 select-none data-[state=open]:animate-[fade-in_500ms_ease] data-[state=closed]:animate-[fade-out_500ms_ease]',
      header: 'sr-only min-h-0 p-0 sm:p-0',
      body: 'overflow-visible p-0 sm:p-0',
      footer: 'p-0 pt-2 sm:p-0 sm:pt-2',
    }"
  >
    <template #body>
      <ModalInfoBody>
        <ModalInfoContent />
      </ModalInfoBody>
    </template>
    <template #footer>
      <ModalInfoActions />
    </template>
  </UModal>
</template>
