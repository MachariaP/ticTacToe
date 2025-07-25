import React from 'react';
import { motion } from 'framer-motion';
import Square from '../Square/Square';

function Board() {
  return (
    <motion.div
      className="board"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {Array(9)
        .fill(null)
        .map((_, index) => (
          <Square key={index} index={index} />
        ))}
    </motion.div>
  );
}

export default Board;