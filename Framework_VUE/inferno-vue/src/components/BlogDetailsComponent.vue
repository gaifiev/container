<template>
  <div>
    <section class="blog-detalis center">
      <div class="container">
        <blogs-list></blogs-list>
        <div class="blog-detalis__content">
          <div class="blog-detalis__items">
            <div class="blog-detalis__item-1">
              <h2 class="blog-detalis__title">
                Let’s Get Solution for Building Construction Work
              </h2>
              <img
                class="blog-detalis__photo1"
                src="/img/blog_detalis/Photo1.png"
                alt="photo"
              />
              <div class="blog-detalis__data">
                <span class="blog-detalis__span-data">26 December, 2022</span>
                <div class="blog-detalis__breadcrumbs">
                  <a href="#">Interior</a>
                  <span>/</span>
                  <a href="#">Home</a>
                  <span>/</span>
                  <a href="#">Decore</a>
                </div>
              </div>
              <p class="blog-detalis__text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injecthumour,
                or randomised words which don't look even slightly believable.
                Embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary.
              </p>
            </div>
            <div class="blog-detalis__item-2">
              <div class="blog-detalis__quotes">
                <span class="blog-detalis__mark">“</span>
                <p class="blog-detalis__paragaph">
                  The details are not the details. They make the design.
                </p>
              </div>
            </div>
            <div class="blog-detalis__item-3">
              <h2 class="blog-detalis__title">Design sprints are great</h2>
              <p class="blog-detalis__text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
              <ol class="blog-detalis__text-list">
                <li>
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </li>
                <li>
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </li>
                <li>
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </li>
              </ol>
            </div>
            <div class="blog-detalis__item-3">
              <img
                class="blog-detalis__image1"
                src="/img/blog_detalis/Image1.png"
                alt="photo"
              />
              <p class="blog-detalis__text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
            </div>
          </div>
          <div class="blog-detalis__tags">
            <h2 class="blog-detalis__title-btn">Tags</h2>
            <div class="blog-detalis__btn-item">
              <button class="blog-detalis__btn">Kitchen</button>
              <button class="blog-detalis__btn">Bedroom</button>
              <button class="blog-detalis__btn">Building</button>
              <button class="blog-detalis__btn">Architecture</button>
              <button class="blog-detalis__btn">Kitchen Planning</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonBlogDetailsComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
</style>
