<template>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark my-3 rounded shadow">
        <ul class="navbar-nav">
          <li class="nav-item" :class="{ active: $route.path === '/' }">
            <router-link :to='{name: "home"}' class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/posts' }">
            <router-link :to='{name: "posts"}' class="nav-link">Posts</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.path === '/create' }">
            <router-link :to='{name: "create"}' class="nav-link">Create Post</router-link>
          </li>
        </ul>
    </nav>
</template>