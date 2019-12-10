import parse from './parsers';
import buildAst from './astBuilder';
import render from './formatters';

const genDiff = (config1, config2, format) => {
  const parsed1 = parse(config1);
  const parsed2 = parse(config2);
  const tree = buildAst(parsed1, parsed2);
  return render(format)(tree);
};

export default genDiff;
