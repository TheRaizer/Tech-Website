import CPUIcon from "../StaticImageFolder/CPU.png";
import GraphicsCardIcon from "../StaticImageFolder/GraphicsCard.png";
import RAMIcon from "../StaticImageFolder/RAM.png";

const parts = [
  { id: 1, name: "CPU" },
  { id: 2, name: "GPU" },
  { id: 3, name: "RAM" },
];

const partsIcons = [
  { id: 1, src: CPUIcon },
  { id: 2, src: GraphicsCardIcon },
  { id: 3, src: RAMIcon },
];

const partsImages = [
  {
    id: 1,
    imgs: {
      EXPENSIVE: { itemId: 22135, src: "" },
      BUDGET: { itemId: 33921, src: "" },
      BEST: { itemId: 99343, src: "" },
    },
  },
  {
    id: 2,
    imgs: {
      EXPENSIVE: { itemId: 52524, src: "" },
      BUDGET: { itemId: 11825, src: "" },
      BEST: { itemId: 87292, src: "" },
    },
  },
  {
    id: 3,
    imgs: {
      EXPENSIVE: { itemId: 12863, src: "" },
      BUDGET: { itemId: 14785, src: "" },
      BEST: { itemId: 19852, src: "" },
    },
  },
];
const partsDescriptions = [
  {
    id: 1,
    descs: {
      expensive:
        "The workstation-focussed Xeon W-3175X  has 28 cores and 56 threads, eclipsing the current desktop flagship, the Core i9-9980XE, " +
        "which only has 18 cores and 36 threads, but uses a more affordable platform in the form of Intel's LGA2066 socket and X299 chipset " +
        "rather than the massive LGA 3647 socket featured on motherboards such as Asus' ROG Dominus Extreme. It has a boost frequency of 4.3GHz " +
        "and TDP of 255W, six-channel memory support and has an unlocked multiplier should you wish to try your hand at overclocking it.",
      best:
        "The AMD Ryzen 5 5600X takes the top spot in the gaming PC market with a solid blend of Intel-beating performance in both gaming and " +
        "application workloads. The six-core 12-thread chip lands at $299, a $50 price hike over its previous-gen counterpart, but brings more " +
        "than enough extra gaming and application performance to justify the premium. The Ryzen 5 5600X even beats the Intel Core i9-10900K at gaming, " +
        "which is an incredible feat given its price point. Not to mention that it's the most power-efficient desktop PC processor we've ever tested.",
      budget:
        "The Ryzen 3 3300X unlocks a new level of performance for budget gamers with four cores and eight threads that can push low- to mid-range graphics " +
        "cards to their fullest. This new processor wields the Zen 2 architecture paired with the 7nm process to push performance to new heights while " +
        "enabling new features for low-end processors, like access to the speedy PCIe 4.0 interface. The 3300X's four cores tick at a 3.8 GHz clock rate " +
        "and boost to 4.3 GHz, providing snappy performance in lightly threaded applications, like games.",
    },
  },
  {
    id: 2,
    descs: {
      expensive:
        "If you’re after the very best consumer graphics card for both gaming and creative work, then look no further than the phenomenal Nvidia " +
        "GeForce RTX 2080 Super. It's a slight upgrade from the original RTX 2080 GPU (which used to sit at the top spot of this guide), but the boosts it does " +
        "bring are certainly welcome, and it means it can easily handle 1440p and 4K games with little difficulty. As a creativity GPU, it's also pretty unrivalled, " +
        "and offers the kind of raw performance that much more expensive professional cards sometimes struggle with. Talking about value, while this is undoubtedly a " +
        "very expensive graphics card, it actually launched at a lower price than the original RTX 2080, further cementing its position as the best graphics card money can buy in 2021.",
      best:
        "AMD's Radeon RX 6800 XT is the best card for Team Red. The RX Radeon 6900 XT is technically about 5-7 percent faster, but it costs 54 percent more. " +
        "That's not a great deal, at all, especially since you don't get more VRAM or any other extras. The RX 6800 XT provides a massive boost in performance " +
        "and features relative to the previous generation RX 5700 XT. It adds ray tracing support (via DirectX Raytracing or VulkanRT), and is 70-90% faster " +
        "across our test suite. The GPU was affectionately dubbed 'Big Navi' prior to launch by the enthusiast community, and we got exactly what we wanted. " +
        "Navi 21 is over twice the size of Navi 10, with twice the shader cores and twice the RAM. Clock speeds are also boosted into the 2.1-2.3 GHz range " +
        "(depending on the card model), the highest clocks we've ever seen from a reference GPU by about 300 MHz. And AMD did all this without substantially " +
        "increasing power requirements: The RX 6800 XT has a 300W TDP, slightly lower than the RTX 3080's 320W TDP.",
      budget:
        "The Nvidia GTX 1650 Super Overclocked is a 4GB GPU and an excellent budget graphics card. It features the latest Turing architecture powering " +
        "the newest generation of Nvidia GPUs and has 4GB GDDR6 to help you enjoy the latest games with using the upper selection of settings. The fantastic " +
        "users over at UserBenchmark provide expedient insight into the estimated number of frames per second (FPS) the GTX 1650 Super Overclocked achieves " +
        "in a range of games. Depending on the system hardware, the GTX 1650 Super Overclocked delivers an average of 111 FPS across games, including Fortnite, " +
        "Overwatch, GTA V, and PUBG. (Though this figure is skewed by the extremely high FPS achieved in older games like CSGO.)",
    },
  },
  {
    id: 3,
    descs: {
      expensive:
        "VENGEANCE LPX memory is designed for high-performance overclocking. The heatspreader is made of pure aluminum for faster heat dissipation, and the " +
        "custom performance PCB helps manage heat and provides superior overclocking headroom. Each IC is individually screened for peak performance potential.",
      best:
        "TeamGroup did a great job with the Xtreem ARGB DDR4-3600 C14 memory kit -- It certainly ticks all the right boxes. The memory kit looks awesome when lit " +
        "up or powered down, and performs equally well. In fact, the Xtreem ARGB is the fastest DDR4-3600 C14 memory kit that we've tested so far. The memory market " +
        "only has a handful of DDR4-3600 C14 memory kits at the 16GB (2x8GB) capacity. And with a price tag of $169.99, the Xtreem ARGB is the least expensive of " +
        "them all. The only gripe we have with is with its availability. Newegg is currently the only retailer that lists the memory kit, so it could be a challenge to find.",
      budget:
        "Intel’s H370 and B360 chipsets instruct its Core i5 (and above) processors to lock out any memory settings above DDR4-2666, which is particularly unfortunate " +
        "in a market that’s moved way past that setting. DDR4-3200 is now mainstream within the enthusiast PC market, and is often treated as such by the memory sellers " +
        "that cater to enthusiasts and gamers. Thus, the best way to get a top-performing brand new DDR4-2666 kit would be to dial the way-back machine to 2016 and get the " +
        "high-performing kit from that time. Barring that, Corsair has a workaround.",
    },
  },
];

export { parts, partsIcons, partsDescriptions, partsImages };
