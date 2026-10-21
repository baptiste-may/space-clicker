<script lang="ts" setup>
const { closeInfoModal } = useGame();

const dialog = ref<HTMLElement | null>(null);
const trigger = ref<HTMLElement | null>(null);

const focusableSelector =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const getFocusableElements = () =>
  Array.from(dialog.value?.querySelectorAll<HTMLElement>(focusableSelector) ?? []).filter(
    (element) => element.getClientRects().length > 0,
  );

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closeInfoModal();
    return;
  }

  if (event.key !== "Tab") return;

  const focusableElements = getFocusableElements();
  if (focusableElements.length === 0) {
    event.preventDefault();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  const activeElement = document.activeElement;

  if (event.shiftKey && (activeElement === firstElement || activeElement === dialog.value)) {
    event.preventDefault();
    lastElement?.focus();
  } else if (!event.shiftKey && activeElement === lastElement) {
    event.preventDefault();
    firstElement?.focus();
  }
};

onMounted(async () => {
  trigger.value = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  await nextTick();
  (getFocusableElements()[0] ?? dialog.value)?.focus();
});

onBeforeUnmount(() => {
  if (trigger.value?.isConnected) trigger.value.focus();
});
</script>

<template>
  <div
    ref="dialog"
    class="absolute flex items-center justify-center w-screen h-screen backdrop-blur-sm z-40"
    role="dialog"
    aria-modal="true"
    aria-labelledby="settings-title"
    tabindex="-1"
    @click="closeInfoModal"
    @keydown="handleKeydown"
  >
    <div
      class="relative flex flex-col gap-2 max-h-full overflow-y-auto"
      @click.stop
    >
      <ModalInfoBody>
        <ModalInfoContent />
      </ModalInfoBody>
      <ModalInfoActions />
    </div>
  </div>
</template>
