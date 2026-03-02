<script setup lang="ts">
const boards = [
  { name: "Platform Launch", active: true },
  { name: "Marketing Plan", active: false },
  { name: "Roadmap", active: false },
];
</script>

<template>
  <aside class="flex h-full w-[300px] shrink-0 flex-col border-r border-kanban-lineLight bg-white">
    <div class="px-[34px] pb-[54px] pt-8">
      <div class="flex items-center gap-4">
        <div class="flex h-[25px] items-center gap-[3px]">
          <span class="h-[25px] w-[6px] rounded-sm bg-kanban-purple"></span>
          <span class="h-[25px] w-[6px] rounded-sm bg-kanban-purple opacity-75"></span>
          <span class="h-[25px] w-[6px] rounded-sm bg-kanban-purple opacity-50"></span>
        </div>
        <span class="text-[32px] font-bold leading-none tracking-[-0.0625rem] text-kanban-black">kanban</span>
      </div>
    </div>

    <div class="flex-1">
      <p class="px-6 pb-[19px] text-heading-s text-kanban-greyMedium">ALL BOARDS (3)</p>
      <nav class="pr-6">
        <a
          v-for="board in boards"
          :key="board.name"
          href="#"
          :aria-current="board.active ? 'page' : undefined"
          :class="[
            'mb-[2px] flex h-12 items-center gap-4 rounded-r-[100px] pl-6 text-heading-m transition',
            board.active
              ? 'bg-kanban-purple text-white'
              : 'text-kanban-greyMedium hover:bg-kanban-bgLight hover:text-kanban-purple',
          ]"
        >
          <svg class="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M0.846 0.846A2.875 2.875 0 0 1 2.889 0h10.222a2.888 2.888 0 0 1 2.889 2.889V13.11A2.888 2.888 0 0 1 13.11 16H2.89A2.888 2.888 0 0 1 0 13.11V2.89C0 2.123.304 1.388.846.846Zm.487 12.265V8.444h8.445v6.223H2.889a1.556 1.556 0 0 1-1.556-1.556ZM9.778 7.111V1.333H2.89c-.413 0-.809.164-1.1.456-.292.292-.456.688-.456 1.1V7.11h8.444Zm1.333-1.333h3.556v4.444H11.11V5.778Zm3.556 5.778H11.11v3.11h2c.412 0 .808-.163 1.1-.455.292-.292.456-.688.456-1.1v-1.555Zm0-8.667v1.556H11.11V1.333h2c.412 0 .808.164 1.1.456.292.292.456.688.456 1.1Z"
              :fill="board.active ? '#FFFFFF' : '#828FA3'"
            />
          </svg>
          <span>{{ board.name }}</span>
        </a>

        <a
          href="#"
          class="mt-[2px] flex h-12 items-center gap-4 rounded-r-[100px] pl-6 text-heading-m text-kanban-purple transition hover:bg-kanban-bgLight"
        >
          <svg class="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M0.846 0.846A2.875 2.875 0 0 1 2.889 0h10.222a2.888 2.888 0 0 1 2.889 2.889V13.11A2.888 2.888 0 0 1 13.11 16H2.89A2.888 2.888 0 0 1 0 13.11V2.89C0 2.123.304 1.388.846.846Zm.487 12.265V8.444h8.445v6.223H2.889a1.556 1.556 0 0 1-1.556-1.556ZM9.778 7.111V1.333H2.89c-.413 0-.809.164-1.1.456-.292.292-.456.688-.456 1.1V7.11h8.444Zm1.333-1.333h3.556v4.444H11.11V5.778Zm3.556 5.778H11.11v3.11h2c.412 0 .808-.163 1.1-.455.292-.292.456-.688.456-1.1v-1.555Zm0-8.667v1.556H11.11V1.333h2c.412 0 .808.164 1.1.456.292.292.456.688.456 1.1Z"
              fill="#635FC7"
            />
          </svg>
          <span>+ Create New Board</span>
        </a>
      </nav>
    </div>

    <div class="px-6 pb-8">
      <div class="flex h-12 items-center justify-center gap-6 rounded-md bg-kanban-bgLight">
        <svg class="h-[18px] w-[18px]" viewBox="0 0 19 19" fill="none" aria-hidden="true">
          <path
            d="M9.167 1.5a.75.75 0 0 1 .75.75v.856a.75.75 0 0 1-1.5 0V2.25a.75.75 0 0 1 .75-.75Zm0 12.788a.75.75 0 0 1 .75.75v.856a.75.75 0 0 1-1.5 0v-.856a.75.75 0 0 1 .75-.75Zm7.667-5.621a.75.75 0 0 1 0 1.5h-.856a.75.75 0 0 1 0-1.5h.856Zm-12.788 0a.75.75 0 0 1 0 1.5H3.19a.75.75 0 0 1 0-1.5h.856ZM14.59 4.077a.75.75 0 0 1 1.06 1.06l-.606.606a.75.75 0 1 1-1.06-1.06l.606-.606Zm-9.856 9.856a.75.75 0 0 1 1.06 1.06l-.606.606a.75.75 0 0 1-1.06-1.06l.606-.606Zm10.916 1.666a.75.75 0 0 1-1.06 0l-.606-.606a.75.75 0 1 1 1.06-1.06l.606.606a.75.75 0 0 1 0 1.06ZM5.794 5.743a.75.75 0 0 1-1.06 0l-.606-.606a.75.75 0 1 1 1.06-1.06l.606.606a.75.75 0 0 1 0 1.06Zm3.373-.076a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z"
            fill="#828FA3"
          />
        </svg>

        <button
          type="button"
          class="relative h-5 w-10 rounded-xl bg-kanban-purple"
          aria-label="Toggle theme"
          aria-pressed="false"
        >
          <span class="absolute left-[3px] top-[3px] h-[14px] w-[14px] rounded-full bg-white"></span>
        </button>

        <svg class="h-[15px] w-[15px]" viewBox="0 0 15 15" fill="none" aria-hidden="true">
          <path
            d="M13.12 10.49A6.113 6.113 0 0 1 4.51 1.88a.5.5 0 0 0-.667-.61A7.001 7.001 0 1 0 13.73 11.157a.5.5 0 0 0-.61-.667Z"
            fill="#828FA3"
          />
        </svg>
      </div>

      <button
        type="button"
        class="mt-4 flex h-12 w-full items-center gap-4 rounded-r-[100px] pr-6 text-heading-m text-kanban-greyMedium transition hover:text-kanban-purple"
      >
        <svg class="ml-0.5 h-4 w-[18px] shrink-0" viewBox="0 0 18 16" fill="none" aria-hidden="true">
          <path
            d="M9.88 3.269A5.224 5.224 0 0 1 15.36 8c0 .537-.082 1.056-.234 1.545l1.207 1.206A7.087 7.087 0 0 0 17 8c-1.236-3.5-4.55-6-8-6-.992 0-1.949.208-2.83.587L7.12 3.54A5.225 5.225 0 0 1 9 3.194c.298 0 .592.026.88.075ZM1.11.84l15.05 15.05-.85.85-2.73-2.73A8.752 8.752 0 0 1 9 14C5.55 14 2.236 11.5 1 8a8.43 8.43 0 0 1 2.049-3.183L.26 2.03l.85-.85Zm4.055 4.055A5.024 5.024 0 0 0 2.872 8c1.05 2.496 3.52 4.194 6.128 4.194.92 0 1.823-.211 2.642-.617L10.2 10.135A2.5 2.5 0 0 1 6.865 6.8L5.165 5.1Zm3.278 3.278 2.38 2.38A2.5 2.5 0 0 0 8.443 8.17Z"
            fill="#828FA3"
          />
        </svg>
        <span>Hide Sidebar</span>
      </button>
    </div>
  </aside>
</template>
