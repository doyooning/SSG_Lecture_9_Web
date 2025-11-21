<script setup>
import { RouterLink, useRouter } from 'vue-router';
import DropDownIconMenuSlot from '@/components/common/DropDownIconMenuSlot.vue';

const router = useRouter();

function moveMain() {
  // router.replace({ path: "/" }); // 현재 라우트를 대체
  // router.push({ path: "/", replace: true }); // 위와 같음
  router.push({ name: 'main' }); // 새 히스토리 항목을 푸시
}

function moveBoard() {
  router.push('/r04/board');
}
</script>

<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          src="@/assets/mmcafe.png"
          class="rounded mx-auto d-block"
          id="logo"
          alt="..."
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              HomeView
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/r02/board" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconBoard></IconBoard>
                    </template>
                    <template v-slot:label> 자유글 </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              AboutView
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{ name: 'main' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              UserInfo
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{ name: 'main' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              UserInfo
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{ name: 'main' }" class="dropdown-item">
                  <DropDownIconMenuSlot>
                    <template v-slot:icon>
                      <IconHome></IconHome>
                    </template>
                    <template v-slot:label> Home </template>
                  </DropDownIconMenuSlot>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#logo {
  width: 9.375rem;
}
</style>
