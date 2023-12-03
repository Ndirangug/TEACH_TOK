/**
 * Padding utility function that mimics padding syntax in web
 * https://developer.mozilla.org/en-US/docs/Web/CSS/padding
 */
export function padding(
  top: number | null,
  right: number | null = top,
  bottom: number | null = top,
  left: number | null = right,
) {
  return {
    paddingTop: top ?? undefined,
    paddingRight: right ?? undefined,
    paddingBottom: bottom ?? undefined,
    paddingLeft: left ?? undefined,
  };
}
