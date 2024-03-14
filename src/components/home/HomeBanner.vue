<template>
  <section class="w-[90vw] md:w-[70vw] xl:w-[60vw] mx-auto duration-300">
    <div class="grid md:grid-cols-2 duration-300 h-[70vh] lg:h-[60vh]">
      <div class="flex justify-center items-center md:order-1">
        <div data-aos="fade-left" data-aos-delay="300" class="flex group relative">
          <img class="w-[132px] md:w-[10vw]" src="../../assets/image/person-img.png" alt="Banner people">
          <div class="absolute -top-4 -right-9 h-fit group-hover:rotate-[30deg] duration-300 ease-in-out">
            <font-awesome-icon icon="fa-solid fa-comment" class="text-13 text-primary" />
            <span class="absolute top-0 left-0 h-full w-full text-white flex justify-center items-center font-bold text-5">Hi~</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <h1 data-aos="zoom-in-right" data-aos-delay="300" class="font-bold text-[32px] mb-2">Hello, I'm <span class="text-primary">Tami</span></h1>
        <h2 data-aos="zoom-in-right" data-aos-delay="600">喜歡打打扣 0 到 1 從做中學，不斷拓展新技術。<br class="hidden lg:block">希望開發具人性及溫暖的產品，持續精進邁向前端工程師。</h2>
      </div>
    </div>
  </section>
</template>