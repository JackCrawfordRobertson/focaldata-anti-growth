import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

const DragHandle = SortableHandle(() => <DragIndicatorIcon />);

const SortableItem = SortableElement(({ value }) => (
  <ListItem
    sx={{
      backgroundColor: 'white',
      marginBottom: '1em',
      boxShadow: '0px 2px 6px #6babf240',
      display: 'flex',
      alignItems: 'center',
      padding: '20px 20px',
    }}
  >
    <ListItemText primary={value} sx={{ flexGrow: 1 }} />
    <DragHandle />
  </ListItem>
));

const SortableList = SortableContainer(({ items }) => (
  <List
    component={Paper}
    sx={{ backgroundColor: 'white', paddingLeft: 0, paddingRight: 0, paddingTop: 2, boxShadow: 'none' }}
  >
    {items.map((value, index) => (
      <SortableItem key={`item-${value}`} index={index} value={value} />
    ))}
  </List>
));

const categories = [
  'National Prosperity',
  'Economic Indicators',
  'Individual Prosperity',
  'Employment Growth',
  'Political Scepticism',
  'General Confusion',
  'Business Expansion',
  'Public Services/Finances',
  'Wealth Distribution',
];

const UserRanking = ({ onSubmit, onContinue }) => {
  const [userRanking, setUserRanking] = useState([...categories]);
  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // Controls the fade-out effect
  const [showScoreOverlay, setShowScoreOverlay] = useState(false); // For showing score overlay
  const [score, setScore] = useState(0);

  const chartRef = useRef(null); // Reference for the chart section

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setUserRanking((prevRanking) => arrayMoveImmutable(prevRanking, oldIndex, newIndex));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    const correctRanking = categories;
    userRanking.forEach((item, index) => {
      if (item === correctRanking[index]) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowScoreOverlay(true); // Show the score overlay after submission
  };

  const handleModalClose = () => {
    setShowScoreOverlay(true); // Keep the score overlay visible

    // Scroll to chart section smoothly
    if (chartRef.current) {
      chartRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    onSubmit(userRanking); // Keep the ranking component visible
    onContinue(); // Trigger the chart rendering
  };

  // Function to reset the state for retry
  const handleRetry = () => {
    setUserRanking([...categories]); // Reset the user ranking to initial state
    setShowScoreOverlay(false); // Hide the score overlay
    setShowOverlay(true); // Show the starting overlay again
  };

  const handleOverlayClick = () => {
    setFadeOut(true); // Trigger fade-out effect
    setTimeout(() => {
      setShowOverlay(false); // Remove overlay after 1 second
    }, 1000);
  };

  return (
    <Container sx={{ borderRadius: '30px', width: '100%', backgroundColor: 'white', padding: '20px', position: 'relative' }}>
      {/* Overlay for "Get Started" */}
      {showOverlay && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.4)', // Glassy white with some transparency
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(10px)', // Frosted glass effect
            opacity: fadeOut ? 0 : 1, // Fade effect on click
            transition: 'opacity 1s ease', // 1-second fade transition
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleOverlayClick}
            sx={{
              padding: '10px 40px',
              fontSize: '1.2rem',
              width: 'auto',
              backgroundColor: '#6babf2',
              '&:hover': {
                backgroundColor: '#5a9be2',
              },
            }}
          >
            Play the Focaldata Thinkathon
          </Button>
        </Box>
      )}

      {/* Ranking Component */}
      <Typography variant="h5" align="left" gutterBottom>
        Rank the Topics by Priority
      </Typography>
      <Typography variant="subtitle2" align="left" gutterBottom sx={{ fontStyle: 'italic', fontWeight: 300 }}>
        Higher Priority
      </Typography>

      <SortableList items={userRanking} onSortEnd={onSortEnd} useDragHandle />

      <Typography variant="subtitle2" align="left" gutterBottom sx={{ fontStyle: 'italic', fontWeight: 300 }}>
        Lower Priority
      </Typography>

      <Box textAlign="center" marginTop={2} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            width: 'auto',
            minWidth: '100%',
            padding: '10px 20px',
            backgroundColor: '#6babf2',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#5a9be2',
            },
          }}
        >
          Submit your answers Ranking
        </Button>
      </Box>

      {/* Score Overlay */}
      {showScoreOverlay && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Glassy white background for score overlay
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(10px)', // Frosted glass effect
            opacity: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0px 2px 6px rgba(0,0,0,0.2)',
              textAlign: 'center',
              width: '400px',
            }}
          >
            <Typography variant="h6">You got {score} out of 9 correct!</Typography>
            <Typography sx={{ marginTop: '10px' }}>Now, see how your answers compare with expert analysis.</Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: '20px',
                maxWidth: '100%',
                backgroundColor: '#6babf2',
                '&:hover': {
                  backgroundColor: '#5a9be2',
                },
              }}
              onClick={handleModalClose}
            >
              Continue
            </Button>
            {/* Retry Button */}
            <Button
              variant="contained"
              sx={{
                marginTop: '10px',
                maxWidth: '100%',
                backgroundColor: '#e74c3c',
                '&:hover': {
                  backgroundColor: '#c0392b',
                },
              }}
              onClick={handleRetry}
            >
              Retry
            </Button>
          </Box>
        </Box>
      )}

      {/* Reference to the chart */}
      <div ref={chartRef}></div>
    </Container>
  );
};

export default UserRanking;