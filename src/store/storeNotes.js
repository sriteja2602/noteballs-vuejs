import { defineStore } from "pinia";

export const useNotesStore = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: 1,
                    title: "Remind",
                    message:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus temporibus nemo sit   nostrum molestiae dicta a obcaecati at nobis numquam!",
                    date: "Jan 1st 2011",
                    image: "https://picsum.photos/96"
                  },
                  {
                    id: 2,
                    title: "Remind2",
                    message:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus temporibus nemo sit   nostrum molestiae dicta a obcaecati at nobis numquam!",
                    date: "Jan 1st 2001",
                    image: "https://picsum.photos/96"
                
                  },
                  {
                    id: 3,
                    title: "Remind3",
                    message:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus temporibus nemo sit   nostrum molestiae dicta a obcaecati at nobis numquam!",
                    date: "Jan 1st 2001",
                    image: "https://picsum.photos/96"
                
                  },
                  
            ]
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

        },
        updateNote(updatedId, updatedTitle, updatedMessage, updatedDate){
            this.notes[updatedId].title = updatedTitle
            this.notes[updatedId].message = updatedMessage
            this.notes[updatedId].date = updatedDate
        },
        deleteNote(idToDelete){
            let date = new Date().toLocaleString()
            let id = idToDelete

            this.notes = this.notes.filter(note => { return note.id !== idToDelete })
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