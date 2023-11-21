//example

const data = [[0, 0], [0, 1], [1, 3], [2, 0]];
const labels = [0, 1, 1, 0];

/*

- Classifies a data point relative to a labelled data set, using the k-nearest neighbors algorithm.
- veriyi yakın ilişkili bir bir noktaya göre etiketleyip en yakın k noktasındaki algoritmada kullanmak.
*/

const kNearestNeighbors = (data, labels, point, k = 3) => {
    const kNearest = data
      .map((el, i) => ({
        dist: Math.hypot(...Object.keys(el).map(key => point[key] - el[key])),
        label: labels[i]
      }))
      .sort((a, b) => a.dist - b.dist)
      .slice(0, k);
  
    return kNearest.reduce(
      (acc, { label }, i) => {
        acc.classCounts[label] =
          Object.keys(acc.classCounts).indexOf(label) !== -1
            ? acc.classCounts[label] + 1
            : 1;
        if (acc.classCounts[label] > acc.topClassCount) {
          acc.topClassCount = acc.classCounts[label];
          acc.topClass = label;
        }
        return acc;
      },
      {
        classCounts: {},
        topClass: kNearest[0].label,
        topClassCount: 0
      }
    ).topClass;
  };