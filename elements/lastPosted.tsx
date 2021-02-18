import TimeAgo from 'react-timeago';
import enString from 'react-timeago/lib/language-strings/en-short';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

const formatter = buildFormatter(enString);

interface IPostedDate {
  date: any;
}

const LastPostedDate = ({ date }: IPostedDate) => {
  return <TimeAgo date={date} formatter={formatter} />;
};

export default LastPostedDate;
