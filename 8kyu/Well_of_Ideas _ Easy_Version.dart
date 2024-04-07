void main() {
  well(['good', 'bad', 'bad', 'bad', 'bad']);
}

String well(List<String> x) {
  String good = 'good';
  List<String> listGood = [];
  String res = '';
  for (int i = 0; i < x.length; i++) {
    if (x[i] == good) {
      listGood.add(x[i]);
      if (listGood.length == 1 || listGood.length == 2) {
        res = 'Publish!';
      } else if (listGood.length > 2) {
        res = 'I smell a series!';
      }
    }
  }
  if (listGood.isEmpty) {
    res = 'Fail!';
  }
  print(res);
  return res;
}
