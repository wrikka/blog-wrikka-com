<template>
    <main class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1  gap-4">
        <a class="flex flex-col gap-4" v-for="item in props.post" :key="item.link" :href="item.link">
            <img class="rounded-md aspect-[1200/630]" :src="item.cover" />
            <h4>{{ item.title }}</h4>
        </a>
    </main>
</template>

<script lang="ts" setup>

    interface Post {
        title: string;
        cover: string;
        link: string;
    }

    const props = defineProps<{
        post: Post[];
    }>();


</script>