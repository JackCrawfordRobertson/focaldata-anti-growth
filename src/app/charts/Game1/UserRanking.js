import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper
} from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

// Drag handle component
const DragHandle = SortableHandle(() => (
  <DragIndicatorIcon />
));

// Sortable item component
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

// Sortable container component
const SortableList = SortableContainer(({ items }) => {
  return (
    <List
      component={Paper}
      sx={{ 
        backgroundColor: 'white', 
        paddingLeft: 0, 
        paddingRight: 0,
        paddingTop: 2,
        boxShadow: 'none'
      }}
    >
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </List>
  );
});

const categories = [
  "National Prosperity", 
  "Economic Indicators", 
  "Individual Prosperity", 
  "Employment Growth", 
  "Political Scepticism", 
  "General Confusion", 
  "Business Expansion", 
  "Public Services/Finances", 
  "Wealth Distribution"
];

const UserRanking = ({ onSubmit }) => {
  const [userRanking, setUserRanking] = useState([...categories]);
  const [showOverlay, setShowOverlay] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);  // Controls the fade-out effect

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setUserRanking((prevRanking) =>
      arrayMoveImmutable(prevRanking, oldIndex, newIndex)
    );
  };

  const handleSubmit = () => {
    onSubmit(userRanking);
  };

  const handleOverlayClick = () => {
    setFadeOut(true);  // Trigger fade-out effect
    setTimeout(() => {
      setShowOverlay(false);  // Remove overlay after 3 seconds
    }, 3000);
  };

  return (
    <Container sx={{ borderRadius: '30px', width: '100%', backgroundColor: 'white', padding: '20px', position: 'relative' }}>
      {/* Overlay */}
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
            opacity: fadeOut ? 0 : 1,  // Fade effect on click
            transition: 'opacity 1s ease',  // 3-second fade transition
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
    </Container>
  );
};

export default UserRanking;