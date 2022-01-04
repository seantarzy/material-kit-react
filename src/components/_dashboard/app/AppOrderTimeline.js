import faker from 'faker';
import PropTypes from 'prop-types';
// material
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
// utils
import { Icon } from '@iconify/react';
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    title: '20%',
    time: faker.date.past(),
    type: 'order1',
    iconType: 'si-glyph:chair-1',
    summary: 'Make the Thrones',
    alignSide: 'left'
  },
  {
    title: '40%',
    time: faker.date.past(),
    type: 'order2',
    iconType: 'noto:coin',
    summary: ' Thrones will be randomly airdropped to our early adopters',
    alignSide: 'right'
  },
  {
    title: '60%',
    time: faker.date.past(),
    type: 'order3',
    iconType: 'emojione-v1:money-bag',
    summary: 'Make a lot of money',
    alignSide: 'left'
  },
  {
    title: '80%',
    time: faker.date.past(),
    type: 'order4',
    iconType: 'emojione:shopping-bags',
    summary: 'Exclusive merch drop for our holders',
    alignSide: 'right'
  },
  {
    title: '100%',
    time: faker.date.past(),
    type: 'order5',
    iconType: 'noto:coin',
    summary: 'Yachts and shit',
    alignSide: 'left'
  }
];

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function OrderItem({ item, isLast }) {
  const { type, title, time, summary, iconType, alignSide } = item;
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        align={alignSide}
        variant="body2"
        color="text.secondary"
      >
        {title}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <Icon icon={iconType} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Typography variant="h6" component="span">
          {summary}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppOrderTimeline() {
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
    >
      <CardHeader title="Roadmap" />
      <CardContent>
        <Timeline position="alternate">
          {TIMELINES.map((item, index) => (
            <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}
