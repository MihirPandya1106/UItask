const styleUtils = (function () {
  const css = styled.css

  const rem = px => `${ px / 16 }rem`
  const em = (px, em = 16) => `${ px / em }em`

  const sizes = {
    // mobile
    mS: 1,
    mM: 375,
    mL: 425,
    // tablet
    tS: 600,
    tM: 768,
    tL: 900,
    // laptop
    lS: 1024,
    lM: 1366,
    lL: 1440
  }

  const spacing = {
    xxs: rem(2),  // rem(2),
    xs:  rem(4),  // rem(5),
    sm:  rem(8),  // rem(10),
    md:  rem(16), // rem(20),
    lg:  rem(32), // rem(40),
    xl:  rem(64), // rem(80),
    xxl: rem(128) // rem(160)
  }

  let min = (pxWidth, conditions = '') => (...args) => css`
    @media (min-width: ${ em(pxWidth) }) ${ conditions } {
      ${ css(...args) }
    }
  `

  min = Object.keys(sizes).reduce((min, sizeLabel) => {
    min[sizeLabel] = (...args) => min(sizes[sizeLabel])(...args)
    return min
  }, min)


  let max = (pxWidth, conditions = '') => (...args) => css`
    @media (max-width: ${ em(pxWidth) }) ${ conditions } {
      ${ css(...args) }
    }
  `

  max = Object.keys(sizes).reduce((max, sizeLabel) => {
    max[sizeLabel] = (...args) => max(sizes[sizeLabel])(...args)
    return max
  }, max)

  const addPropSetter = (prop, rules, values = {}) => {
    const getSetRule = val => (rules.set instanceof Function)
      ? rules.set(values[val] || val)
      : rules.set

    if (!prop) return
    if (typeof prop !== 'object') return getSetRule(prop)

    const sizeVal = key => sizes[key] || key
    const sizeLabels = Object.keys(prop)
      .sort((a, b) => sizeVal(a) > sizeVal(b))

    const getRule = val => val === false
      ? rules.unset
      : getSetRule(val)

    return sizeLabels.map(sizeLabel => {
      return min(sizeVal(sizeLabel))([getRule(prop[sizeLabel])])
    })
  }

  return {
    rem,
    em,
    sizes,
    spacing,
    min,
    max,
    addPropSetter
  }
})()
