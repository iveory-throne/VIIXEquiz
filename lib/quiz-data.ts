export const witches = [
  {
    id: "lilli",
    name: "Lilli",
    witchName: "Lilliah, the Crimson Moon",
    symbol: "🌙 Crimson Moon",
    power: "Lunar communion & stillness magic",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5B1%5D%20LILLI%20%282%29-JK7bZxkn0MNj50zFit2Fa3J9RouKKG.png",
    description:
      "You are the calm presence everyone turns to for guidance. A natural leader with a gentle touch, you possess wisdom beyond your years and protect those you love fiercely. Your quiet strength speaks louder than words.",
    traits: ["Calm", "Protective", "Wise", "Graceful", "Composed", "Philosophical"],
    color: "from-blue-600 to-blue-700",
  },
  {
    id: "khi",
    name: "Khi",
    witchName: "Circe, the Flame Unfettered",
    symbol: "🔥 Dancing Flames",
    power: "Fire summoning through movement",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5B2%5D%20KHI%20%282%29-KLuk3ZxyXEgNw9ClVQal2RMOc9AruW.png",
    description:
      "You light up every space you enter with infectious energy and joy. Bold and fearless, you turn obstacles into fuel and inspire others through movement and laughter. Your warmth is impossible to resist.",
    traits: ["Energetic", "Fearless", "Playful", "Warm", "Confident", "Joyful"],
    color: "from-orange-500 to-red-600",
  },
  {
    id: "quinn",
    name: "Quinn",
    witchName: "Nyxara, the Songkeeper",
    symbol: "🎵 Ancient Hymn",
    power: "Voice that carries truth & memory",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5B3%5D%20QUINN%20%282%29-5Y4SFTI1Fcs9AqkxdSsz8XmimtpHkF.png",
    description:
      "Music moves you on a spiritual level, and your unique voice carries weight and history. You feel deeply, express through art, and believe in the power of truth. You are an old soul navigating modern struggles.",
    traits: ["Ethereal", "Emotional", "Artistic", "Introspective", "Wise", "Mysterious"],
    color: "from-purple-600 to-indigo-700",
  },
  {
    id: "rue",
    name: "Rue",
    witchName: "Vexa, the Phoenix Oracle",
    symbol: "🔮 Phoenix Feather",
    power: "Fire manipulation & prophetic visions",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5B5%5D%20RUE%20%282%29-lDxIlSp6o0OVsqopsxdfNpl3OLuGoq.png",
    description:
      "You are a natural performer who transforms on stage and sees patterns others miss. Playful yet mystical, creative after dark, and fiercely protective of your chosen family. Fire imagery speaks to your rebirth.",
    traits: ["Intuitive", "Empathetic", "Confident", "Creative", "Caring", "Competitive"],
    color: "from-red-600 to-orange-600",
  },
  {
    id: "val",
    name: "Val",
    witchName: "Vinea, the Rooted One",
    symbol: "🌿 Ancient Roots",
    power: "Nature communion & earth magic",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5B6%5D%20VAL%20%282%29-3UIZr9gfdfELJxlTY6Etv0qqQ1XdD9.png",
    description:
      "Grounded and steadfast, you have a mysterious aura that draws intrigue. Nature grounds you, and you've become stronger through solitude. Your words carry weight and rhythm, and you value privacy fiercely.",
    traits: ["Grounded", "Mysterious", "Strong", "Private", "Powerful", "Resilient"],
    color: "from-green-700 to-emerald-800",
  },
  {
    id: "iori",
    name: "Iori",
    witchName: "Niamh, of Distant Blood",
    symbol: "💨 Eastern Wind",
    power: "Healing through song & storm calling",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5B4%5D%20IORI%20%282%29-cxckArKaMlH9kWJVEmQUE9u68ox5O7.png",
    description:
      "You bridge different worlds with gentle healer energy and artistic creativity. People underestimate your power, but storms excite rather than scare you. You speak truest through art.",
    traits: ["Artistic", "Gentle", "Perceptive", "Multilingual", "Healing", "Bridge-builder"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "mel",
    name: "Mel",
    witchName: "Hazel, the Youngest Star",
    symbol: "✨ Protective Sigil",
    power: "Protective magic & sigil crafting",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%5B7%5D%20MEL%20%282%29-XivlbYLKg1GexG8ApN8euo4giuveqk.png",
    description:
      "Youngest but far from weakest, you are a natural peacemaker who knows when to stand firm. Adaptable and instinctively protective, you're often underestimated—and you use that to your advantage.",
    traits: ["Wise", "Versatile", "Protective", "Balanced", "Peacemaker", "Strong"],
    color: "from-yellow-400 to-amber-500",
  },
]

interface Answer {
  text: string
  witchId: string
}

interface Question {
  question: string
  answers?: Answer[]
}

export const questions: Question[] = [
  {
    question: "Your perfect weekend vibes?",
    answers: [
      { text: "Moonlit meditation & mystery novels", witchId: "lilli" },
      { text: "Dancing till dawn with your besties", witchId: "khi" },
      { text: "Creating art or live performances", witchId: "quinn" },
      { text: "Tarot reading & late-night creativity", witchId: "rue" },
      { text: "Hiking in nature or cozy me-time", witchId: "val" },
      { text: "Cultural exploration & new experiences", witchId: "iori" },
      { text: "Brunch with friends & good company", witchId: "mel" },
    ],
  },
  {
    question: "What's your go-to chaos management strategy?",
    answers: [
      { text: "Zen out and let inner wisdom guide you", witchId: "lilli" },
      { text: "Dance it out like your life depends on it", witchId: "khi" },
      { text: "Channel it all into your art", witchId: "quinn" },
      { text: "Plot your revenge (romantically, of course)", witchId: "rue" },
      { text: "Stand your ground and be brutally honest", witchId: "val" },
      { text: "Heal everyone's feelings first", witchId: "iori" },
      { text: "Somehow fix everything without breaking a nail", witchId: "mel" },
    ],
  },
  {
    question: "Your group chat energy?",
    answers: [
      { text: "The wise sage everyone asks for advice", witchId: "lilli" },
      { text: "The hype beast with 100 memes daily", witchId: "khi" },
      { text: "The cryptic one posting poetry at 3am", witchId: "quinn" },
      { text: "Mysterious vibes, rarely online but iconic when present", witchId: "rue" },
      { text: "Lurking silently, then dropping truth bombs", witchId: "val" },
      { text: "Sending voice notes in random languages", witchId: "iori" },
      { text: "Organizing everyone and keeping the peace", witchId: "mel" },
    ],
  },
  {
    question: "If you got a superpower for 24 hours?",
    answers: [
      { text: "Mind reading (but like, with wisdom)", witchId: "lilli" },
      { text: "Flight—just vibes in the sky all day", witchId: "khi" },
      { text: "Shape-shifting to experience every perspective", witchId: "quinn" },
      { text: "Seeing into alternate timelines", witchId: "rue" },
      { text: "Making anyone believe anything you say", witchId: "val" },
      { text: "Healing any wound instantly", witchId: "iori" },
      { text: "Controlling the weather because why not", witchId: "mel" },
    ],
  },
  {
    question: "What makes you genuinely mad?",
    answers: [
      { text: "When people dismiss your spiritual knowledge", witchId: "lilli" },
      { text: "Anyone trying to cage your freedom", witchId: "khi" },
      { text: "Fake people and insincere vibes", witchId: "quinn" },
      { text: "Wasting potential (yours or others')", witchId: "rue" },
      { text: "Boundary stompers and energy vampires", witchId: "val" },
      { text: "Seeing kind souls get hurt", witchId: "iori" },
      { text: "Unfair treatment and bullying", witchId: "mel" },
    ],
  },
  {
    question: "What's your biggest flex?",
    answers: [
      { text: "People trust you with their deepest secrets", witchId: "lilli" },
      { text: "You make anywhere feel like a party", witchId: "khi" },
      { text: "Your art has healed people's hearts", witchId: "quinn" },
      { text: "You can predict trends before they happen", witchId: "rue" },
      { text: "You never compromise on authenticity", witchId: "val" },
      { text: "You speak multiple languages AND multiple hearts", witchId: "iori" },
      { text: "You're everyone's safe space", witchId: "mel" },
    ],
  },
  {
    question: "How do witches actually do it?",
    answers: [
      { text: "Through stillness, intention, and cosmic timing", witchId: "lilli" },
      { text: "Pure audacity and refusing to dim your light", witchId: "khi" },
      { text: "By channeling ancient truths through art", witchId: "quinn" },
      { text: "By believing in the impossible until it's real", witchId: "rue" },
      { text: "By staying real when the world asks you to fake it", witchId: "val" },
      { text: "By healing and being healed in return", witchId: "iori" },
      { text: "By protecting what matters and adapting to everything else", witchId: "mel" },
    ],
  },
]
