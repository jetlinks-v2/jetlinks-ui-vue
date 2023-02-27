import moment from 'moment';
import * as echarts from 'echarts';

export const getInterval = (type) => {
    switch (type) {
        case 'year':
            return '30d';
        case 'month':
        case 'week':
            return '1d';
        case 'hour':
            return '1m';
        default:
            return '1h';
    }
};
export const getTimeFormat = (type) => {
    switch (type) {
        case 'year':
            return 'YYYY-MM-DD';
        case 'month':
        case 'week':
            return 'MM-DD';
        case 'hour':
            return 'HH:mm';
        default:
            return 'HH';
    }
};

export const getTimeByType = (type) => {
    switch (type) {
        case 'hour':
            return moment().subtract(1, 'hours');
        case 'week':
            return moment().subtract(6, 'days');
        case 'month':
            return moment().subtract(29, 'days');
        case 'year':
            return moment().subtract(365, 'days');
        default:
            return moment().startOf('day');
    }
};

export const arrayReverse = (data) => {
    const newArray = [];
    for (let i = data.length - 1; i >= 0; i--) {
        newArray.push(data[i]);
    }
    return newArray;
};

export const networkParams = (val) => [
    {
        dashboard: 'systemMonitor',
        object: 'network',
        measurement: 'traffic',
        dimension: 'agg',
        group: 'network',
        params: {
            type: val.type,
            interval: getInterval(val.time.type),
            from: moment(val.time.time[0]).valueOf(),
            to: moment(val.time.time[1]).valueOf(),
        },
    },
];
export const defulteParamsData = (group, val) => [
    {
        dashboard: 'systemMonitor',
        object: 'stats',
        measurement: 'info',
        dimension: 'history',
        group,
        params: {
            from: moment(val.time[0]).valueOf(),
            to: moment(val.time[1]).valueOf(),
        },
    },
];

export const areaStyle = {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 1,
            color: 'rgba(151, 154, 255, 0)',
        },
        {
            offset: 0,
            color: 'rgba(151, 154, 255, .24)',
        },
    ]),
};
export const areaStyleCpu = {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 1,
            color: 'rgba(44, 182, 224, 0)',
        },
        {
            offset: 0,
            color: 'rgba(44, 182, 224, .24)',
        },
    ]),
};
export const areaStyleJvm = {
    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 1,
            color: 'rgba(96, 223, 199, 0)',
        },
        {
            offset: 0,
            color: 'rgba(96, 223, 199, .24)',
        },
    ]),
};

export const typeDataLine = [
    {
        data: [],
        type: 'line',
    },
];
