export const themes1 = {
  light: {
    textColor: '#ff0000'
  },
  dark: {
    textColor: '#fff'
  },
  common: {
    fontSize: 12,
    textColor: '#000'
  }
}

export const themes2 = {
  light: {
    textColor: '#ffff00'
  },
  dark: {
    textColor: '#fff'
  }
}

export const style1 = (
  theme: typeof themes1.common & typeof themes1.light
) => ({
  text: {
    color: theme.textColor,
    fontSize: theme.fontSize
  }
})

export const style2 = (theme: typeof themes2.light) => ({
  text: {
    color: theme.textColor
  }
})

export const style3 = (
  theme: typeof themes1.common & typeof themes1.light,
  options?: { disabled: boolean }
) => ({
  text: {
    color: options && options.disabled ? '#c0c0c0' : theme.textColor,
    fontSize: theme.fontSize
  }
})
