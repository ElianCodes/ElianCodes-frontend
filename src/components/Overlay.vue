<template>
  <section class="hero-wrap js-fullheight" style="height: 100%">
		<div class="overlay"></div>
		<div class="container">
			<div class="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
				<div class="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
					<div class="text text-center">
						<span class="subheading">Hello, I'm</span>
						<h1>Elian Van Cutsem</h1>
            <Subtitle />
					</div>
				</div>
			</div>
		</div>
		<div class="mouse">
			<a href="#experience" class="mouse-icon">
				<div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
			</a>
		</div>
	</section>
</template>

<script>
import Subtitle from "@/components/Subtitle";

export default {
	name: 'Overlay',
  components: {
    Subtitle
  }
}
</script>