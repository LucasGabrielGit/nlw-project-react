type IProps = {
  text?: string;
  texts?: string[];
};

export function Button(props: IProps) {
  return <button>{props.text || props.texts}</button>;
}
