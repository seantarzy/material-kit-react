import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
  InputLabel,
  Select,
  MenuItem,
  CardMedia
} from '@mui/material';
import MintingImage from '../../../assets/MINTING_NFT_01.webp';
// utils
import { mockImgCover } from '../../../utils/mockImages';
// ----------------------------------------------------------------------

const NEWS = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    title: faker.name.title(),
    description: faker.lorem.paragraphs(),
    image: mockImgCover(setIndex),
    postedAt: faker.date.soon()
  };
});

//   ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

function NewsItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5 }}
      />
      <Box sx={{ minWidth: 240 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {formatDistance(postedAt, new Date())}
      </Typography>
    </Stack>
  );
}

export default function AppNewsUpdate() {
  return (
    <Card>
      <CardHeader title="Mint your own Thrones" />
      <Divider />
      <Box sx={{ p: 2, textAlign: 'right' }}>
        <p>
          This will explain the process of minting a throne and having it be sent to their
          OpenSea/Coinbase. Price, discuss fair distrubution randomness
        </p>
        <CardMedia component="img" src={MintingImage} />
        <InputLabel id="demo-simple-select-standard-label">Mint</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={1}
          onChange={null}
          label="mint #"
          width="5rem"
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <Divider />
        <Button
          variant="contained"
          to="#"
          size="medium"
          color="inherit"
          endIcon={<Icon icon="grommet-icons:connect" />}
        >
          Connect Wallet
        </Button>
        <Button
          variant="contained"
          to="#"
          size="medium"
          color="inherit"
          endIcon={<Icon icon="mdi:hand-coin-outline" />}
        >
          Mint Throne(s)
        </Button>
      </Box>
    </Card>
  );
}
