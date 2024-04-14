import React, { useState, useEffect } from 'react';
import { Badge, Calendar, Modal, Button } from 'antd';

const NoteModal = ({ visible, onCancel, date, onSave, note: initialNote, onDelete }) => {
  const [note, setNote] = useState(initialNote || '');

  useEffect(() => {
    setNote(initialNote || '');
  }, [initialNote]);

  const handleSave = () => {
    onSave(date, note);
    onCancel();
  };

  return (
    <Modal
      title="Add Note"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="delete" onClick={() => onDelete(date)}>Delete</Button>,
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
    >
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter your note here..."
        style={{ width: '100%', minHeight: '100px' }}
      />
    </Modal>
  );
};

const CustomCalendar = () => {
  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes, setNotes] = useState({});

  const handleSelect = (date) => {
    setSelectedDate(date);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setSelectedDate(null);
  };

  const handleSaveNote = (date, note) => {
    const newNotes = { ...notes };
    newNotes[date.format('YYYY-MM-DD')] = note;
    setNotes(newNotes);
  };

  const handleDeleteNote = (date) => {
    const newNotes = { ...notes };
    delete newNotes[date.format('YYYY-MM-DD')];
    setNotes(newNotes);
    setVisible(false); // Close modal after deletion
  };

  const dateCellRender = (value) => {
    const dateString = value.format('YYYY-MM-DD');
    const note = notes[dateString];
    return note ? (
      <div className="note">
        <Badge status="success" text={note} />
      </div>
    ) : null;
  };

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} onSelect={handleSelect} />
      <NoteModal
        visible={visible}
        onCancel={handleCancel}
        date={selectedDate}
        onSave={handleSaveNote}
        note={notes[selectedDate?.format('YYYY-MM-DD')]} // Pass the note for the selected date
        onDelete={handleDeleteNote}
      />
    </div>
  );
};

export default CustomCalendar;
