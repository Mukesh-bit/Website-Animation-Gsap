function HomeAnimation() {
  gsap.set(".slidem", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  )
    .to(
      ".slidem",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )
    .to(
      ".lgt",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
}

function RealSectionAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4,
  });
}

function TeamSectionAnimation(){

document.querySelectorAll(".listelem").forEach((el) => {
  el.addEventListener("mousemove", function (dets) {
    gsap.to(this.querySelector(".picture"), {
      opacity: 1,
      x: gsap.utils.mapRange(0, window.innerWidth, -100, 100, dets.clientX),
      ease: Power4,
      duration: 0.5,
    });
  });

  el.addEventListener("mouseleave", function () {
    gsap.to(this.querySelector(".picture"), {
      opacity: 0,
      ease: Power4,
      duration: 0.5,
    });
  });
});
}

function paraSectionAnimation() {
  
var clutter = ""
document.querySelector(".textpara").textContent.split("").forEach((e) => {
  if(e === " ") clutter += `<span>&nbsp;</span>`
  clutter += `<span>${e}</span>`
})

document.querySelector(".textpara").innerHTML = clutter

gsap.set(".textpara span", {opacity: .1})

gsap.to(".textpara span", {
  scrollTrigger: {
    trigger: ".para",
    start: "top 60%",
    end: "bottom 80%",
    scrub: 2
  },
  opacity: 1,
  ease: Power4,
  stagger: .03
})
}

function CapsuleSectionAnimation() {
  gsap.to(".capsule", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1
    },
    y:0,
    ease: Power4
  })
}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
}

function BodyColorChangeAnimation() {
document.querySelectorAll(".section").forEach((e) => {
  ScrollTrigger.create({
    trigger: e,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: function() {
      document.body.setAttribute("theme", e.dataset.color)
    },
    onEnterBack: function() {
      document.body.setAttribute("theme", e.dataset.color)
    }
  })
})
}
  

RealSectionAnimation();
HomeAnimation();
TeamSectionAnimation()
paraSectionAnimation()
loco()
CapsuleSectionAnimation()
BodyColorChangeAnimation()