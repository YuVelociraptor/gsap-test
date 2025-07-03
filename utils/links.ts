import {ref} from "vue";

export const nav_links = ref<{ label: string; to: string }[]>([
    { label: 'Home', to: '/' },
    { label: 'Box01', to: '/Box01'},
])