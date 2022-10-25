import { defineStore } from "pinia";

export const useNotesStore = defineStore('storeNotes', {
    state: () => {
        if(JSON.parse(localStorage.getItem("notes")) === null){
            let notes = []
            localStorage.setItem("notes", JSON.stringify(notes));
        }
        else{

        }
        return {
            notes: JSON.parse(localStorage.getItem("notes"))
        }
    },
    actions: {
        addNote(title, message, date) {
            let id = this.notes.length + 1
            
            let note = {
                id,
                title,
                message,
                date
            }

            this.notes.unshift(note)
            console.log(JSON.parse(localStorage.getItem("notes"))[0]);

            localStorage.setItem("notes", JSON.stringify(this.notes));

        },
        updateNote(updatedId, updatedTitle, updatedMessage, updatedDate){
            // this.notes[updatedId].title = updatedTitle
            // this.notes[updatedId].message = updatedMessage
            // this.notes[updatedId].date = updatedDate
            let localStorageNotes = JSON.parse(localStorage.getItem("notes"));
            console.log(updatedId);
            localStorageNotes[localStorageNotes.length - updatedId - 1].title = updatedTitle;
            localStorageNotes[localStorageNotes.length - updatedId - 1].message = updatedMessage
            localStorageNotes[localStorageNotes.length - updatedId - 1].date = updatedDate

            localStorage.setItem("notes", JSON.stringify(localStorageNotes));

        },
        deleteNote(idToDelete){
            if(confirm("Are you sure you want to delete the note?")){
                // this.notes = this.notes.filter(note => { return note.id !== idToDelete })
                let localStorageNotes = JSON.parse(localStorage.getItem("notes"));
                localStorageNotes = localStorageNotes.filter(note => { return note.id !== idToDelete })
                location.reload()
                localStorage.setItem("notes", JSON.stringify(localStorageNotes));

            }

        },
    },
        getters:{
            getEditNote: (state) => {
                return (id) => {
                    return state.notes.filter(note => { return parseInt(id) === note.id})[0]
                }
            },
            totalStats: (state) => {
                return state.notes.length
            },
            totalCharactersCount: (state) => {
                let count = 0;
                state.notes.forEach(note => {
                    count = count + note.message.length + note.title.length
                }) 
                return count
            }
        }
    
}) 