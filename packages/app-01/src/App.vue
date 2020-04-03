<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">app-01</router-link>|
            <router-link to="/app-02/test">app-02</router-link>|
            <router-link to="/app-03/test">app-03</router-link>
        </div>
        <router-view />
    </div>
</template>