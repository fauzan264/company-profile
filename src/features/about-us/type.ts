export interface ITimeLine {
  title: string;
  description: string;
  year: string;
}

export interface TimelineComponentProps extends ITimeLine {
  classname: string;
}
