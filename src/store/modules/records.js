import { uuid } from 'vue-uuid';

const state = {
  records: [
    { 
      id: uuid.v4(),
      title: 'Estresse é sempre presente',
      postedAt: new Date('2020-07-10'),
      mood: 'happy',
      tasks: [
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: true },
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: true },
        { id: uuid.v4(), title: 'Almoçar', completed: true }
      ]
    },
    { 
      id: uuid.v4(),
      title: 'Estresse é sempre presente',
      postedAt: new Date('2020-07-08'),
      mood: 'happy',
      tasks: [
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: true },
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: true },
        { id: uuid.v4(), title: 'Almoçar', completed: true }
      ]
    },
    { 
      id: uuid.v4(),
      title: 'Estresse é sempre presente',
      postedAt: new Date('2020-07-05'),
      mood: 'happy',
      tasks: [
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: true },
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: true },
        { id: uuid.v4(), title: 'Almoçar', completed: true }
      ]
    },
    { 
      id: uuid.v4(),
      title: 'Estresse é sempre presente',
      postedAt: new Date('2020-07-01'),
      mood: 'happy',
      tasks: [
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: true },
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: true },
        { id: uuid.v4(), title: 'Almoçar', completed: true }
      ]
    },
    { 
      id: uuid.v4(),
      title: 'Estresse é sempre presente',
      postedAt: new Date('2020-07-21'),
      mood: 'happy',
      tasks: [
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: true },
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: false },
        { id: uuid.v4(), title: 'Almoçar', completed: true },
        { id: uuid.v4(), title: 'Almoçar', completed: true }
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
  },
  recordsByPage: state => (page, itemsPerPage) => {
    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = page * itemsPerPage;

    return state.records.slice(startIdx, endIdx);
  }
};

const actions = {
  async addRecord({ commit }, newRecord) {
    commit('addRecord', newRecord);
  }
};

const mutations = {
  addRecord: (state, newRecord) => {
    state.records = [
      {
        id: uuid.v4(), 
        postedAt: new Date(), 
        ...newRecord
      }, 
      ...state.records
    ];
  }
};



export default { state, getters, actions, mutations };