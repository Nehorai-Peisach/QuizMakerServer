const quizAgg = () => {
  return [
    {
      $lookup: {
        as: 'questions',
        from: 'questions',
        let: { questions_id: '$questions_id' },
        pipeline: [
          { $match: { $expr: { $in: ['$_id', '$$questions_id'] } } },
          {
            $lookup: {
              as: 'topics',
              from: 'topics',
              let: { topics_id: '$topics_id' },
              pipeline: [
                { $match: { $expr: { $in: ['$_id', '$$topics_id'] } } },
                {
                  $lookup: {
                    as: 'company',
                    from: 'companies',
                    let: { company_id: '$company_id' },
                    pipeline: [{ $match: { $expr: { $eq: ['$_id', '$$company_id'] } } }],
                  },
                },
                {
                  $unwind: {
                    path: '$company',
                    preserveNullAndEmptyArrays: true,
                  },
                },
                {
                  $project: {
                    company_id: false,
                  },
                },
              ],
            },
          },
          {
            $project: {
              topics_id: false,
            },
          },
        ],
      },
    },
    {
      $project: {
        questions_id: false,
      },
    },
    {
      $lookup: {
        as: 'topic',
        from: 'topics',
        let: { topic_id: '$topic_id' },
        pipeline: [
          { $match: { $expr: { $eq: ['$_id', '$$topic_id'] } } },
          {
            $lookup: {
              as: 'company',
              from: 'companies',
              let: { company_id: '$company_id' },
              pipeline: [{ $match: { $expr: { $eq: ['$_id', '$$company_id'] } } }],
            },
          },
          {
            $unwind: {
              path: '$company',
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $project: {
              company_id: false,
            },
          },
        ],
      },
    },
    {
      $unwind: {
        path: '$topic',
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        topic_id: false,
      },
    },
  ];
};

module.exports = quizAgg;
