const state = {
  records: [
    { 
      id: 1,
      title: 'Estresse é sempre presente',
      postedAt: new Date('2020-07-10'),
      mood: 'happy',
      tasks: [
        { id: 1, title: 'Almoçar', completed: false },
        { id: 2, title: 'Almoçar', completed: true },
        { id: 3, title: 'Almoçar', completed: false },
        { id: 4, title: 'Almoçar', completed: false },
        { id: 5, title: 'Almoçar', completed: true },
        { id: 6, title: 'Almoçar', completed: true }
      ]
    },
    { 
      id: 2,
      title: 'Estresse é sempre presente',
      postedAt: new Date('2020-07-08'),
      mood: 'happy',
      tasks: [
        { id: 1, title: 'Almoçar', completed: false },
        { id: 2, title: 'Almoçar', completed: true },
        { id: 3, title: 'Almoçar', completed: false },
        { id: 4, title: 'Almoçar', completed: false },
        { id: 5, title: 'Almoçar', completed: true },
        { id: 6, title: 'Almoçar', completed: true }
      ]
    },
    { 
      id: 3,
      title: 'Estresse é sempre presente',
      postedAt: new Date('2020-07-05'),
      mood: 'happy',
      tasks: [
        { id: 1, title: 'Almoçar', completed: false },
        { id: 2, title: 'Almoçar', completed: true },
        { id: 3, title: 'Almoçar', completed: false },
        { id: 4, title: 'Almoçar', completed: false },
        { id: 5, title: 'Almoçar', completed: true },
        { id: 6, title: 'Almoçar', completed: true }
      ]
    },
    { 
      id: 4,
      title: 'Estresse é sempre presente',
      postedAt: new Date('2020-07-01'),
      mood: 'happy',
      tasks: [
        { id: 1, title: 'Almoçar', completed: false },
        { id: 2, title: 'Almoçar', completed: true },
        { id: 3, title: 'Almoçar', completed: false },
        { id: 4, title: 'Almoçar', completed: false },
        { id: 5, title: 'Almoçar', completed: true },
        { id: 6, title: 'Almoçar', completed: true }
      ]
    },
    { 
      id: 5,
      title: 'Estresse é sempre presente',
      postedAt: new Date('2020-07-21'),
      mood: 'happy',
      tasks: [
        { id: 1, title: 'Almoçar', completed: false },
        { id: 2, title: 'Almoçar', completed: true },
        { id: 3, title: 'Almoçar', completed: false },
        { id: 4, title: 'Almoçar', completed: false },
        { id: 5, title: 'Almoçar', completed: true },
        { id: 6, title: 'Almoçar', completed: true }
      ]
    },
  ]
};

const getters = {
  allRecords: state => state.records.sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime()),
  recordsCount: state => state.records.length,
  record: state => id => state.records.find(r => id === r.id),
  existsTodayRecord: state => {
    const [lastRecord] = state.records
      .sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());
    
    const currentDay = new Date().getDate();
    const lastRecordDay = lastRecord.postedAt.getDate();  
    
    return lastRecordDay === currentDay;
  }
};

const actions = {
  async addRecord({ commit }, newRecord) {
    commit('addRecord', newRecord);
  }
};

const mutations = {
  addRecord: (state, newRecord) => state.records.unshift({
    id: state.records.length, 
    postedAt: new Date(), 
    ...newRecord
  })
};



export default { state, getters, actions, mutations };