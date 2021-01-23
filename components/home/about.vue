<template>
  <section class="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
		<div class="container">
			<div class="row d-flex no-gutters">
				<div class="col-md-6 col-lg-6">
          <img :style="{'Border-radius': '50%', 'width': '25rem', 'height': 'auto'}" :src="require(`~/assets/about/about${image}.png`)" alt="Elian's avatar" />
				</div>
				<div class="col-md-6 col-lg-6 pl-md-5 py-5">
					<div class="row justify-content-start pb-3">
						<div class="col-md-12 heading-section ftco-animate">
							<h1 class="big">About</h1>
							<h2 class="mb-4">About Me</h2>
							<p class="text-dark">
								I've been studying Computer Science for almost 2 years now. I'm still learning lots of new technologies
                and skills everyday. I'm trying to better my skills by building websites for friends and family and
                trying out fun projects. Mostly I'm building websites for clients through technologies like WordPress,
                but I'm still learning <a v-for="item in resumeItems" :key="item.name">{{item.name}}, </a> probably way more.
							</p>
							<ul class="about-info mt-4 px-md-0 px-2 text-dark">
								<li class="d-flex"><span>Name:&nbsp;</span><span>Elian Van Cutsem</span></li>
								<li class="d-flex"><span>Date of birth:&nbsp;</span><span>July 09, 1999</span></li>
								<li class="d-flex"><span>Location:&nbsp;</span><span>Ghent, Belgium</span></li>
								<li class="d-flex">
                  <span>Email:</span>&nbsp;<a href="mailto:elianvancutsem@gmail.com"><span>elianvancutsem@gmail.com</span></a>
                </li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>


export default {
  name: "about",
  data() {
    return {
      image: 2
    }
  }
}
</script>

<style>

</style>